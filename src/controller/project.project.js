// model Project
const { projectSchema, Project } = require("../config/Model/project");

const Task = require("../config/Model/task");
const aqp = require("api-query-params");

const { userSchema, User } = require("../config/Model/user");

const mongoose = require("mongoose");
const { json } = require("body-parser");
const ObjectId = mongoose.Types.ObjectId;

const ValidateUser = require("../middleware/validateUser.middleware");

// create Project   [POST] http://localhost:3000/project
const createProjectController = (req, res) => {
  const {
    name,
    startDate,
    endDate,
    description,
    customerInfor,
    usersInfor,
    leader,
    tasks,
  } = req.body;

  const createProject = Project.create({
    name,
    startDate,
    endDate,
    description,
    leader,
    customerInfor,
  });
  createProject;

  res.status(200).json({
    sucress: true,
    createProject: {
      name,
      startDate,
      endDate,
      description,
      customerInfor,
      usersInfor,
      leader,
      tasks,
    },
  });
};

// update  usersInfor,tasks  [PATCH] http://localhost:3000/project/:id
const updateProject = async (req, res) => {
  const data = req.body;
  const _id = req.params.id;
  // console.log(data);

  try {
    const myProject = await Project.findById({ _id });

    // update User và task cho dự án
    const addUsersInfor = async () => {
      if (data.usersInfor) {
        await data.usersInfor.filter(async (item) => {
          if (myProject.usersInfor.includes(item)) {
            return;
          }
          await myProject.usersInfor.push(item);
        });
      }

      if (data.tasks) {
        await data.tasks.filter(async (item) => {
          if (myProject.tasks.includes(item)) {
            return;
          }
          await myProject.tasks.push(item);
        });
      }
      await myProject.save();
    };

    addUsersInfor();

    res.status(201).json({
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      status: false,
      data: error,
    });
  }
};

// delete project  [DELETE]  http://localhost:3000/project/:id
const deleteProject = async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const findProject = await Project.findById({ _id: id });

  const deleteProject = await Project.deleteOne({ _id: id });
  deleteProject;
  res.status(200).json({
    deleted: 1,
    data: findProject,
  });
};

// remove User in Project [Get] http://localhost:3000/project/:id
const removeUserinProject = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const iduser = new ObjectId(req.query.iduser);
  // console.log(iduser);
  const { population } = aqp(req.query);

  // func remove User Id
  const removeUser = async () => {
    try {
      // tim project by id
      const project = await Project.findById(id).populate(population);

      // nếu ko có id thì return not found
      if (!project) {
        console.error(`Project not found: ${id}`);
        return await `not found user id: ${iduser}`;
      }

      // nếu mảng usersInfor rỗng thì return mảng rỗng
      if (project.usersInfor.length === 0) {
        console.error(`usersInfor: empty`);
        return `usersInfor: empty`;
      }

      // loc usersInfor, so sanh từng cái id với id cần xóa
      // false là ko nhận, true là nhận nên !item._id.equals(iduser)
      // để loạn bỏ id cần xóa
      const updatedUsers = project.usersInfor.filter(
        (item) => !item._id.equals(iduser)
      );

      // nếu mảng trước khi xóa và sau khi xóa bằng nhau
      // thì chứng tỏ là ko có id nào bị xóa cả
      // vì vậy return not found id để dừng chương trình
      if (project.usersInfor.length === updatedUsers.length) {
        console.error(`User not found: ${iduser}`);
        return `not found user id: ${iduser}`;
      }

      // tất cả các trường hợp trên thỏa mãn và ko return
      // thì ta gán project.usersInfor cho mảng usersInfor mới là updatedUsers
      project.usersInfor = updatedUsers;
      await project.save();

      console.log("Deleted user with id: ", iduser);
      return `deleted user id: ${iduser}`;
    } catch (error) {
      console.error("Error removing user: ", error);
      return `Error removing user id: ${iduser}`;
    }
  };

  res.status(200).json({
    status: true,
    data: await removeUser(),
  });
};

// remove Task [PATCH] http://localhost:3000/project/:id
const removeTaskinProject = async (req, res) => {
  const projectId = req.params.id; // Lấy ID của dự án từ route parameter
  const taskId = req.query.taskId;
  // const { population, taskId } = aqp(req.query);

  // const population = req.query.population;

  // console.log("projectId", projectId);
  console.log("taskId", taskId);
  // console.log("population", population);

  try {
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Thực hiện các thao tác xóa nhiệm vụ khỏi dự án ở đây
    // Ví dụ: project.tasks.pull(taskId);
    await project.tasks.pull(taskId);

    await project.save();

    res.status(200).send("Congratulations!!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create Task   [post] http://localhost:3000/project/task
const createTaskController = (req, res) => {
  const {
    name,
    description,
    status,
    startDate,
    endDate,
    usersInfo,
    projectInfo,
  } = req.body;

  // console.log({
  //   name,
  //   description,
  //   status,
  //   startDate,
  //   endDate,
  //   usersInfo,
  //   projectInfo,
  // });
  // const projectId = new ObjectId("64f2e377db5cc13ed702666c");

  const createTask = Task.create({
    name,
    description,
    status,
    startDate,
    endDate,
    usersInfo,
    projectInfo,
  });
  // createTask;
  res.send("successfully !!!");
};

// Create User  [post] http://localhost:3000/project/user
const createUserController = (req, res) => {
  const { name, email, city } = req.body;

  if (ValidateUser(req.body) !== true) {
    res.status(201).json({
      status: false,
      data: ValidateUser(req.body),
    });
  } else {
    const createUser = User.create({ name, email, city });
    console.log({ name, email, city });
    res.status(201).json({
      status: true,
      data: { name, email, city },
    });
  }
};

// Get Project [Get]  http://localhost:3000/project/
const getAllProject = async (req, res) => {
  const pageOptions = {
    page: Number(req.query.page) || 0,
    limit: Number(req.query.limit) || 2,
  };
  // console.log("pageOptions", pageOptions);
  const { filter, population } = aqp(req.query);
  delete filter.page;
  console.log("population", population);
  // console.log("fillter", filter);

  const project = await Project.find()
    .populate(population)
    .skip((pageOptions.page - 1) * pageOptions.limit)
    .limit(pageOptions.limit)
    .exec();
  console.log(project);

  res.status(200).json(project);
};

module.exports = {
  createProjectController,
  updateProject,
  getAllProject,
  deleteProject,
  removeUserinProject,
  removeTaskinProject,
  createTaskController,
  createUserController,
};

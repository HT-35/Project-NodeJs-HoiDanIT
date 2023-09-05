const projectRouter = require("express").Router();

const {
  createProjectController,
  updateProject,
  getAllProject,
  deleteProject,
  removeUserinProject,
  removeTaskinProject,
  createTaskController,
  createUserController,
} = require("../controller/project.project");

// [post] http://localhost:3000/project
projectRouter.post("/project", createProjectController);

// [post] http://localhost:3000/project/task
projectRouter.post("/project/task", createTaskController);

//[post ]  http://localhost:3000/project/user
projectRouter.post("/project/user", createUserController);

//[patch]  http://localhost:3000/project/:id
projectRouter.patch("/project/:id", updateProject);

// //[get]  http://localhost:3000/project/
projectRouter.get("/project/", getAllProject);

//  [DELETE] http://localhost:3000/project/:id
projectRouter.delete("/project/:id", deleteProject);

// //[get]  http://localhost:3000/project/:id
projectRouter.get("/project/:id", removeUserinProject);

// [patch] http://localhost:3000/project/task/64f2e377db5cc13ed702666c
projectRouter.put("/project/task/:id", removeTaskinProject);

module.exports = projectRouter;

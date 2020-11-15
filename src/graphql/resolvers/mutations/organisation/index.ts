import { DepartmentModel, OrganisationModel, ProjectModel } from "../../../../models";

export default {
  addOrganisation: (root, { input }) =>
    new Promise((resolve, reject) => {
      new OrganisationModel({ ...input }).save((err, org) => {
        if (err) return reject(err);
        return resolve(org);
      });
    }),
  addLevel: (root, { input }) =>
    new Promise((resolve, reject) => {
      new DepartmentModel({ ...input }).save((err, org) => {
        if (err) return reject(err);
        return resolve(org);
      });
    }),
    addProject:(root, { input }) =>
    new Promise((resolve, reject) => {
      new ProjectModel({ ...input }).save((err, org) => {
        if (err) return reject(err);
        return resolve(org);
      });
    }),
};

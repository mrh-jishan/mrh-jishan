import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {WeMateData} from "./data/we-mate.data";

export interface IProject {
  id: number | string;
  name: string;
  description: string;
  projectLink: string;
  liveUrl?: string;
  isFeatured?: boolean;
  features?: string[];
  tags: string[];
  techStuff: string[];
  additionalData?: { title: string; data: string[] }[];
}

export const testUniqueness = <T>(allData: T[], uKeyFn: (t: T) => any) => {
  const result = {error: null, duplicates: []};
  allData.forEach((data, i, alldata) => {
    if (alldata.filter(p => uKeyFn(p) === uKeyFn(data)).length !== 1) {
      result.error = 'Duplicate Key';
      result.duplicates.push(data);
    }
  });
  return result;
};


const getAllProject = () => {
  const projects = [
    WeMateData,
  ];

  if (!environment.production) {
    const result = testUniqueness(projects, project => project.id);

    if (result.error) {
      const errorLog = [];
      result.duplicates.forEach((project: IProject) => {
        errorLog.push(`Duplicate E-id ${project.id} of ${project.name} `);
      });
      throw new Error(JSON.stringify(errorLog));
    }
  }

  return projects;
};

export const ALL_PROJECT_DATA = getAllProject();

@Injectable()
export class ProjectDataService {

  constructor() {
  }

  getProjects(): IProject[] {
    return ALL_PROJECT_DATA;
  }
}

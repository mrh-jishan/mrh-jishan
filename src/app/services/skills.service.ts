import {Injectable} from '@angular/core';

export interface ISkill {
  type: string;
  names: string[];
}

export const SKILLS_DATA: ISkill[] = [
  {
    type: 'Programming Language',
    names: [
      'C', 'C#', 'JavaScript', 'TypeScript', 'Python'
    ]
  },
  {
    type: 'Backend',
    names: [
      'Spring Boot', 'Ruby on Rails','Node.js & Express.js',
    ]
  },
  {
    type: 'Frontend',
    names: [
      'Angular', 'React.js', 'CSS', 'HTML', 'jQuery'
    ]
  },
  {
    type: 'Database & ORM',
    names: [
      'Postgres','MySql', 'MongoDB', 'JDBC/JPA/Hibernate', 'Mongoose','DB2', 'Oracle', 'Redis'
    ]
  },
  {
    type: 'Cloud',
    names: [
      'Amazon Web Services (AWS)', 'Firebase DB & Functions', 'Heroku'
    ]
  },
  {
    type: 'Testing',
    names: [
      'Mockito', 'Rspec', 'jUnit', 'Jasmine', 'Mocha', 'Chai'
    ]
  },
  {
    type: 'Others',
    names: [
      'Git & GitHub', 'CI/CD', 'REST API', 'JWT', 'Auth0','Micro-Service','Multithreading'
    ]
  },
];

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() {
  }

  getSkills(): ISkill[] {
    return SKILLS_DATA;
  }
}

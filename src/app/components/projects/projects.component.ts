import {Component, EventEmitter, OnInit} from '@angular/core';
import {animate, animateChild, keyframes, query, stagger, style, transition, trigger} from "@angular/animations";
import {IProject, ProjectDataService} from "../../services/project-data.service";
import {TagsService} from "../../services/tags.service";

@Component({
  selector: 'rh-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('slideIn', [
      transition('* => *', [
        query(':enter', style({ transform: 'translateY(-25%)', opacity: 0 }), {
          optional: true
        }),
        query(':leave', style({ transform: 'translateY(0%)', opacity: 1 }), {
          optional: true
        }),
        query(
          ':enter',
          [
            stagger('0.05s', [
              animate(
                '0.2s ease-out',
                keyframes([
                  style({
                    transform: 'translateY(-25%)',
                    opacity: 0,
                    offset: 0
                  }),
                  style({ transform: 'translateY(0%)', opacity: 1, offset: 1 })
                ])
              )
            ])
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            stagger('0.05s', [
              animate(
                '0.2s ease-in',
                keyframes([
                  style({ transform: 'translateY(0%)', offset: 0 }),
                  style({ transform: 'translateY(-25%)', opacity: 0, offset: 1 })
                ])
              )
            ])
          ],
          { optional: true }
        )
      ])
    ]),

    trigger('animateChildren', [
      transition('* => *', [
        query('@*, :enter', [animateChild()], { optional: true }),
        query('@*, :leave', [animateChild()], { optional: true })
      ])
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  projects: IProject[];
  tagSubscription$: EventEmitter<any>;
  selectedProject: IProject;

  constructor(
    private tagsService: TagsService,
    private projectService: ProjectDataService
  ) {}

  ngOnInit() {
    // console.log('project component created');
    this.renderProjects();
    this.tagSubscription$ = this.tagsService.onTagUpdate;
    this.tagSubscription$.subscribe(() => {
      if (this.projects.length === 0) this.renderProjects();
      else this.projects = [];
    });
  }

  ngOnDestroy() {
    // console.log('project component destroyed');
  }

  onProjectCardClick(data) {
    this.selectedProject = data.project;
  }

  renderProjects() {
    this.projects = this.projectService
      .getProjects()
      .filter(project =>
        this.tagsService.tags
          .filter(tag => tag.isSelected)
          .reduce(
            (prev, tag) =>
              prev || project.tags.indexOf(tag.displayName.toLowerCase()) !== -1,
            false
          )
      );
  }

}

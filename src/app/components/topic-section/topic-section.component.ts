import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic-section',
  templateUrl: './topic-section.component.html',
  styleUrls: ['./topic-section.component.scss']
})

export class TopicSectionComponent {
  @Input() topicName!: string;
}

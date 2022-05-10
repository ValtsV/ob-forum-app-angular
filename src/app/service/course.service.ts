import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { COURSES } from '../COURSES_MOCK_DATA';
import { Course } from '../Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private selectedCourse = new BehaviorSubject<Course>(COURSES[0])

  constructor() {   }

  getCourses(userId: number): Observable<Course[]> {
    return of(COURSES)
  } 

  getSelectedCourse(): Observable<Course> {
    return this.selectedCourse.asObservable()
  }


  setSelectedCourse(course: Course): void {
    this.selectedCourse.next(course)
  }
}
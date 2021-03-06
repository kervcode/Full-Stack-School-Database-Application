import React, { Component} from 'react';

class CreateCourse extends Component {
    state = {  }
    render() { 
        return ( 

      <div className="bounds course--detail">
      <h1>Create Course</h1>
      <div>
        <div>
          <h2 className="validation--errors--label">Validation errors</h2>
          <div className="validation-errors">
            <ul>
              <li>Please provide a value for "Title"</li>
              <li>Please provide a value for "Description"</li>
            </ul>
          </div>
        </div>
        <form>
          <div className="grid-66">
            <div className="course--header">
              <h4 className="course--label">Course</h4>
              <div><input id="title" name="title" type="text" className="input-title course--title--input" placeholder="Course title..."
                  value="" /></div>
              <p>By Joe Smith</p>
            </div>
            <div className="course--description">
              <div><textarea id="description" name="description" className="" placeholder="Course description..."></textarea></div>
            </div>
          </div>
          <div className="grid-25 grid-right">
            <div className="course--stats">
              <ul className="course--stats--list">
                <li className="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <div><input id="estimatedTime" name="estimatedTime" type="text" className="course--time--input"
                      placeholder="Hours" value="" /></div>
                </li>
                <li class="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <div><textarea id="materialsNeeded" name="materialsNeeded" class="" placeholder="List materials..."></textarea></div>
                </li>
              </ul>
            </div>
          </div>
          <div class="grid-100 pad-bottom"><button class="button" type="submit">Create Course</button><button class="button button-secondary" onclick="event.preventDefault(); location.href='index.html';">Cancel</button></div>
        </form>
      </div>
    </div>

         );
    }
}
 
export default CreateCourse;
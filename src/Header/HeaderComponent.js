import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            // <div>
                <nav class="navbar navbar-expand-md navbar-light bg-light mb-4">
                  <a class="navbar-brand" href="#">Top navbar</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                      </li>
                    </ul>
                  </div>
                </nav>
            // </div>
        );
    }
}

export default HeaderComponent;
# webdev-gadgets-bootstrap-pagination
pagination component based on [bootstrap pagination](http://www.w3schools.com/bootstrap/bootstrap_pagination.asp), create pagination dynamically and stably, prevent many kinds of boundary exceptions.

This simple component does least thing to create a pagination, focuses on pagination algothrim. It almost does nothing but adds correct bootstrap pagination html code. But you can add all interactives and styles if you are familiar with bootstrap. You can fork the simple page.js source code to provide user-defined features. View the demos below:

[demos](https://cdn.rawgit.com/jdk137/webdev-gadgets-bootstrap-pagination/master/index.html)

![example image](https://raw.githubusercontent.com/jdk137/webdev-gadgets-bootstrap-pagination/master/pagination.png)

simple usage:

html:
``` html
    <div class="text-center">
      <div class="pagination"></div>
    </div>
```

javascript:
``` js
  $('.pagination').bsPagination({
    totalRecord: 200,
    recordPerPage: 10,
    currentPage: 3
  });
```

[More complex usages](https://cdn.rawgit.com/jdk137/webdev-gadgets-bootstrap-pagination/master/index.html)


If you need a powerful bootstrap-paginator which provides many configs, you may need [bootstrap pagination](http://lyonlai.github.io/bootstrap-paginator/).

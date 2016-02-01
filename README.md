# webdev-gadgets-bootstrap-pagination
pagination component based on bootstrap pagination, create pagination dynamically.

![example image](https://raw.githubusercontent.com/jdk137/webdev-gadgets-bootstrap-pagination/master/pagination.png)

simple usage:

html, this component did nothing but insert html code into div.pagination
``` html
    <div class="text-center">
      <div class="pagination"></div>
    </div>
```

javascript
``` js
  $('.pagination1').bsPagination({
    totalRecord: 200,
    recordPerPage: 10,
    recentPage: 3
  });
```

More complex demos

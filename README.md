# webdev-gadgets-bootstrap-pagination
pagination component based on bootstrap pagination


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
    recentPage: 1
  });
```

More complex demos
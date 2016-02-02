$.fn.bsPagination = function (config) {
  var $container = $(this);
  // 2 required params
  // all records number
  var totalRecord = config.totalRecord;
  // current page
  var currentPage = config.currentPage || 1;

  // optional params
  // setLinkAttr to add to every page link, it's userdefined.
  var setLinkAttr = config.setLinkAttr || function (page) {
    return 'data-page="' + page + '"';
  };
  // records number in one page, default is 10
  var recordPerPage = config.recordPerPage || 10;
  // pages number show in one batch, default is 5
  // for example: << 6 7 8 9 10 >> means pagePerBatch is 5.
  // << 4 5 6 >> means pagePerBatch is 3.
  var pagePerBatch = config.pagePerBatch || 5;
  var prevBatchWord = config.prevBatchWord || '<<'; // previous batch word
  var nextBatchWord = config.nextBatchWord || '>>'; // next batch word
  var showFirstPage = config.showFirstPage || false; // boolean, show first page link or not
  var showLastPage = config.showFirstPage || false; // boolean, show last page link or not
  var firstPageWord = config.firstPageWord || '<<<'; // first page word
  var lastPageWord = config.lastPageWord || '>>>'; // last page word

  // data process;
  var totalPage = Math.ceil(totalRecord / recordPerPage); //total page number
  var totalBatch = Math.ceil(totalPage / pagePerBatch); // total batch number
  var currentBatch = Math.ceil(currentPage / pagePerBatch); // current batch
  currentPage = Math.min(currentPage, totalPage); // currentPage should not be larger than totalPage
  var minPage = (currentBatch - 1) * pagePerBatch + 1; // min page of current batch
  var maxPage = Math.min(currentBatch * pagePerBatch, totalPage);  // max page of current batch
  var showLeft = currentBatch > 1; // boolean, show left-batch-link or not
  var showRight = currentBatch < totalBatch; // boolean, show right-batch-link or not

  // draw
  var html = '';
  var active = '';
  var i;
  if (totalPage <= 1) { //not show if totalPage <= 1
    $container.html('');
    return;
  }
  if (showFirstPage && showLeft) {
    html += '<li class="first-page"><a ' + setLinkAttr(1) + '>' + firstPageWord + '</a></li>';
  }
  if (showLeft) {
    html += '<li class="left-batch"><a ' + setLinkAttr(minPage - 1) + '>' + prevBatchWord + '</a></li>';
  }
  for (i = minPage; i <= maxPage; i++) {
    active = (i === currentPage) ? 'class="active"' : '';
    html += '<li ' + active + '><a ' + setLinkAttr(i) + '>' + i + '</a></li>';
  }
  if (showRight) {
    html += '<li class="right-batch"><a ' + setLinkAttr(maxPage + 1) + '>' + nextBatchWord + '</a></li>';
  }
  if (showLastPage && showRight) {
    html += '<li class="last-page"><a ' + setLinkAttr(totalPage) + '>' + lastPageWord + '</a></li>';
  }
  $container.html(html);
};
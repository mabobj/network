package com.hisen.web;

import com.hisen.entity.Book;
import com.hisen.service.BookService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by hisen on 17-4-24.
 */
@Controller
@RequestMapping("/book")
public class BookController {
  protected Logger logger = LogManager.getLogger(this.getClass().getName());

  @Autowired
  private BookService bookService;

  @RequestMapping(value = "/list", method = RequestMethod.GET)
  private String list(Model model) {
    List<Book> list = bookService.getList(0, 1000);
    model.addAttribute("list", list);
    return "list";// WEB-INF/jsp/"list".jsp
  }

  @RequestMapping(value = "/detail/{bookId}", method = RequestMethod.GET)
  private String detail(@PathVariable("bookId") Long bookId, Model model) {
    Book book = bookService.getById(bookId);
    model.addAttribute("book", book);
    return "detail";
  }

  @RequestMapping(value = "/add", method = RequestMethod.POST, produces = "text/plain;charset=UTF-8")
  @ResponseBody
  private String add(Book book) {
    Book hasBook = bookService.getById(book.getBookId());
    int i = -2;
    if (hasBook == null) {
      i = bookService.addBook(book);
    }
    return i > 0 ? "success" : "error";
  }

  @RequestMapping(value = "/del/{bookId}", method = RequestMethod.GET)
  @ResponseBody
  private String deleteBookById(@PathVariable("bookId") Long id) {
    int i = bookService.deleteBookById(id);
    return i > 0 ? "success" : "error";
  }
}

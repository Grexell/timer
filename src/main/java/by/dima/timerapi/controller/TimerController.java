package by.dima.timerapi.controller;

import by.dima.timerapi.service.TimerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class TimerController {

    private TimerService timerService;

    @Autowired
    public TimerController(TimerService timerService) {
        this.timerService = timerService;
    }

    @GetMapping(path = "/get/{timerId}")
    public ResponseEntity getTime(@PathVariable int timerId) {
        return new ResponseEntity(timerService.getById(timerId), HttpStatus.OK);
    }

    @GetMapping(path = "/create")
    public ResponseEntity getTime(@RequestParam(name = "timer") long timer) {
        return new ResponseEntity(timerService.create(timer), HttpStatus.OK);
    }
}

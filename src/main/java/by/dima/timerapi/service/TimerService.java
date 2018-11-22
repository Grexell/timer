package by.dima.timerapi.service;

import by.dima.timerapi.model.Timer;

public interface TimerService {
    Timer getById(int id);
    int create(Timer timer);
}

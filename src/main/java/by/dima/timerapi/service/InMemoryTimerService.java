package by.dima.timerapi.service;

import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.LinkedList;

@Service
public class InMemoryTimerService implements TimerService {
    private LinkedList<Long> timers = new LinkedList<>();
    @Override
    public long getById(int id) {
        return timers.get(id) - new Date().getTime();
    }

    @Override
    public int create(long dist) {
        timers.add(dist);
        return timers.size() - 1;
    }
}

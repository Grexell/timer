package by.dima.timerapi.service;

import by.dima.timerapi.model.Timer;
import by.dima.timerapi.repository.TimerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersistanceTimerService implements TimerService {

    private TimerRepository timerRepository;

    @Autowired
    public PersistanceTimerService(TimerRepository timerRepository) {
        this.timerRepository = timerRepository;
    }

    @Override
    public Timer getById(int id) {
        return timerRepository.findById(id).get();
    }

    @Override
    public int create(Timer timer) {
        return timerRepository.save(timer).getId();
    }
}

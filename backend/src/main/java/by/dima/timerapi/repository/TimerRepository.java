package by.dima.timerapi.repository;

import by.dima.timerapi.model.Timer;
import org.springframework.data.repository.CrudRepository;

public interface TimerRepository extends CrudRepository<Timer, Integer> {
}

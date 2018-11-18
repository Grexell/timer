package by.dima.timerapi.model;

import org.springframework.data.annotation.Id;

import javax.persistence.Entity;

@Entity
public class Timer {
    @Id
    private int id;

    private long diff;

    private String message;

    public Timer() {
    }

    public Timer(long diff, String message) {
        this.diff = diff;
        this.message = message;
    }

    public Timer(int id, long diff, String message) {
        this.id = id;
        this.diff = diff;
        this.message = message;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getDiff() {
        return diff;
    }

    public void setDiff(long diff) {
        this.diff = diff;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

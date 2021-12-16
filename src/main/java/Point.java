import javax.persistence.*;

@Entity
@Table(name = "hahapoints")
public class Point {

    private Integer id;

    @Column(name = "x")
    private double x;
    @Column(name = "y")
    private double y;
    @Column(name = "r")
    private double r;
    @Column(name = "result")
    private String result; //V ORACLE NET TIPA BOOLEAN XDDDDDD
    @Column(name = "runtime")
    private String runtime;
    @Column(name = "timestamp")
    private String timestamp;

    public Point() {}

    public Point(double x, double y, double r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getRuntime() {
        return runtime;
    }

    public void setRuntime(String runtime) {
        this.runtime = runtime;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }

    public void checkHit() {
        double x = this.x;
        double y = this.y;
        double r = this.r;
        this.result = String.valueOf((x >= 0 && y >= 0 && y <= r && x <= r/2) || // rectangle
                (x <= 0 && x >= -1*r && y >= 0 && y <= x/2 + r/2) || // triangle
                (x <= 0 && y <= 0 && x*x + y*y <= r*r/4)); // circle
    }
}

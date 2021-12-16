import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;


@ManagedBean
@SessionScoped
public class PointBean implements Serializable{
    private Session session;
    private Point point = new Point();
    private List<Point> points = new ArrayList<>();

    public Point getPoint() {
        return point;
    }

    public void setPoint(Point point) {
        this.point = point;
    }

    public List<Point> getPoints() {
        return points;
    }

    public void setPoints(List<Point> points) {
        this.points = points;
    }

    private void addToDB() {
        try{
            session = SessionFactoryGenerator.getSessionFactory().openSession();
            Transaction transaction = session.beginTransaction();
            session.save(point);
            transaction.commit();
            session.close();
        } catch (Exception e){
            e.printStackTrace();
        }

    }

    public void addPoint() {
        long start = System.nanoTime();
        point.checkHit();
        point.setTimestamp(LocalDateTime.now(ZoneId.of("Europe/Moscow")).format(DateTimeFormatter.ofPattern("d.MM.yyyy HH:mm")));
        point.setRuntime(String.valueOf((System.nanoTime() - start) / 1000000d));
        points.add(point);
        //TODO вернуть бд
        addToDB();

        point = new Point(point.getX(), point.getY(), point.getR());
    }
}
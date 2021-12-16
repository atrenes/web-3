import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;
@FacesValidator("xValidator")
public class XValidator implements Validator {
    @Override
    public void validate(FacesContext context, UIComponent component,
                         Object value) throws ValidatorException {

        boolean isValid = false;
        try {
            Double[] xValues = {-2.0, -1.5, -1.0, -0.5, 0d, 0.5, 1.0, 1.5};
            double x = Double.parseDouble(value.toString());
            isValid = Arrays.asList(xValues).contains(x);
        } catch (NumberFormatException e) {
            isValid = false;
        }
        if (!isValid) {
            FacesMessage fmsg = new FacesMessage(FacesMessage.SEVERITY_ERROR, "X Validation failed", "Invalid X.");
            throw new ValidatorException(fmsg);
        }
    }
}
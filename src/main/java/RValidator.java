import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;
@FacesValidator("rValidator")
public class RValidator implements Validator {
    @Override
    public void validate(FacesContext context, UIComponent component,
                         Object value) throws ValidatorException {

        boolean isValid;
        try {
            Double[] rValues = {1.0, 2.0, 3.0, 4.0, 5.0};
            double r = Double.parseDouble(value.toString());
            isValid = Arrays.asList(rValues).contains(r);
        } catch (NumberFormatException e) {
            isValid = false;
        }
        if (!isValid) {
            FacesMessage fmsg = new FacesMessage(FacesMessage.SEVERITY_ERROR, "R Validation failed", value.toString());
            throw new ValidatorException(fmsg);
        }
    }
}
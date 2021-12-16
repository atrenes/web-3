import java.util.Arrays;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;
@FacesValidator("yValidator")
public class YValidator implements Validator {
    @Override
    public void validate(FacesContext context, UIComponent component,
                         Object value) throws ValidatorException {

        boolean isValid = false;
        try {
            double y = Double.parseDouble(value.toString());
            isValid = (y >= -3 && y <= 3 && value.toString().length() < 10);
        } catch (NumberFormatException e) {
            isValid = false;
        }
        if (!isValid) {
            FacesMessage fmsg = new FacesMessage(FacesMessage.SEVERITY_ERROR, "Y Validation failed", "Invalid Y.");
            throw new ValidatorException(fmsg);
        }
    }
}
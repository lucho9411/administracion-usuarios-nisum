import { FormGroup } from "@angular/forms";
import { User } from "../../core/interfaces/users.interface";

export class Utils {

    filterTable(form: FormGroup, users: User[]): User[] {
        return users.filter(el => (form.get('username')?.value!==undefined&&form.get('username')?.value!==null&&form.get('username')?.value!=='')?el.login.username.includes(form.get('username')?.value):true &&
            (form.get('username')?.value!==undefined&&form.get('email')?.value!==null&&form.get('email')?.value!=='')?el.email.includes(form.get('email')?.value):true &&
            (form.get('username')?.value!==undefined&&form.get('names')?.value!==null&&form.get('names')?.value!=='')?el.name.first.includes(form.get('names')?.value):true &&
            (form.get('username')?.value!==undefined&&form.get('lastnames')?.value!==null&&form.get('lastnames')?.value!=='')?el.name.last.includes(form.get('lastnames')?.value):true &&
            (form.get('username')?.value!==undefined&&form.get('gender')?.value!==null&&form.get('gender')?.value!=='')?el.gender === form.get('gender')?.value:true &&
            (form.get('username')?.value!==undefined&&form.get('cell')?.value!==null&&form.get('cell')?.value!=='')?el.cell.includes(form.get('cell')?.value):true
        );
    }
}
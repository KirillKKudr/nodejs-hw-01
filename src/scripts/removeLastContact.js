import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = async () => {
    const contacts = await readContacts();
    if (contacts.length > 0) {
        contacts.pop();
        await writeContacts(contacts);
        console.log('Останній контакт видалено.');
    } else {
        console.log('Контактів немає.');
    }
};

removeLastContact();

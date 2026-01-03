import { useEffect, useState } from "react";
import { API } from "./api";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const loadContacts = async () => {
    const res = await API.get("/");
    setContacts(res.data);
  };

  useEffect(() => { loadContacts(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    const res = await API.post("/", form);
    setContacts([...contacts, res.data]);
    setForm({ name: "", email: "", phone: "" });
  };

  const remove = async (id) => {
    await API.delete(`/${id}`);
    setContacts(contacts.filter(c => c._id !== id));
  };

  return (
    <div className="container">
      <h2>Smart Contact Manager</h2>

      <form onSubmit={submit}>
        <input placeholder="Name" value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })} />
        <input placeholder="Phone" value={form.phone}
          onChange={e => setForm({ ...form, phone: e.target.value })} />
        <button>Add Contact</button>
      </form>

      <ul>
        {contacts.map(c => (
          <li key={c._id}>
            {c.name} | {c.email} | {c.phone}
            <button onClick={() => remove(c._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('register');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [account, setAccount] = useState(null);

  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    password: '',
    role: 'customer',
    city: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage('');
    setLoading(true);

    const endpoint =
      mode === 'register' ? 'register/' : 'login/';

    const payload =
      mode === 'register'
        ? form
        : { email: form.email, password: form.password };

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/accounts/${endpoint}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        const errorMessage =
          data.error || Object.values(data).flat().join(' ');
        throw new Error(errorMessage || 'Request failed.');
      }

      setMessage(data.message);

      if (mode === 'login') {
        setAccount(data.account);
        // Keep the token in memory for now.
        // Do not store it in localStorage yet.
        setForm((previous) => ({ ...previous, password: '' }));
      } else {
        setMode('login');
        setForm((previous) => ({ ...previous, password: '' }));
      }
    } catch (error) {
      setMessage(error.message || 'Could not connect to the backend.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: '420px', margin: '50px auto', padding: '24px' }}>
      <h1>LocalServe</h1>
      <p>Find trusted local services in your city.</p>

      {account ? (
        <section>
          <h2>Welcome, {account.full_name}!</h2>
          <p>Email: {account.email}</p>
          <p>Role: {account.role}</p>
          <p>City: {account.city}</p>
          <button
            onClick={() => {
              setAccount(null);
              setMessage('');
              setMode('login');
            }}
          >
            Log out
          </button>
        </section>
      ) : (
        <>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
            <button type="button" onClick={() => { setMode('register'); setMessage(''); }}>
              Register
            </button>
            <button type="button" onClick={() => { setMode('login'); setMessage(''); }}>
              Login
            </button>
          </div>

          <h2>{mode === 'register' ? 'Create an account' : 'Login'}</h2>

          <form onSubmit={handleSubmit}>
            {mode === 'register' && (
              <>
                <label>
                  Full name
                  <input
                    name="full_name"
                    value={form.full_name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <br /><br />

                <label>
                  Phone
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </label>

                <br /><br />

                <label>
                  City
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                  />
                </label>

                <br /><br />

                <label>
                  Account type
                  <select name="role" value={form.role} onChange={handleChange}>
                    <option value="customer">Customer</option>
                    <option value="provider">Service Provider</option>
                  </select>
                </label>

                <br /><br />
              </>
            )}

            <label>
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <br /><br />

            <label>
              Password
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                minLength={8}
                required
              />
            </label>

            <br /><br />

            <button type="submit" disabled={loading}>
              {loading ? 'Please wait...' : mode === 'register' ? 'Create account' : 'Login'}
            </button>
          </form>
        </>
      )}

      {message && <p role="status">{message}</p>}
    </main>
  );
}

export default App;

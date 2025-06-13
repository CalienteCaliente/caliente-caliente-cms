import { useState } from 'react';

export default function Admin() {
  const [campaigns, setCampaigns] = useState([]);
  const [newCampaign, setNewCampaign] = useState({ title: '', message: '', zone: '' });

  const addCampaign = () => {
    if (!newCampaign.title || !newCampaign.message || !newCampaign.zone) return;
    setCampaigns([...campaigns, { ...newCampaign, id: Date.now() }]);
    setNewCampaign({ title: '', message: '', zone: '' });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Crear nueva campaña</h2>
      <input
        placeholder="Título"
        value={newCampaign.title}
        onChange={(e) => setNewCampaign({ ...newCampaign, title: e.target.value })}
      />
      <textarea
        placeholder="Mensaje"
        value={newCampaign.message}
        onChange={(e) => setNewCampaign({ ...newCampaign, message: e.target.value })}
      />
      <input
        placeholder="Zona"
        value={newCampaign.zone}
        onChange={(e) => setNewCampaign({ ...newCampaign, zone: e.target.value })}
      />
      <button onClick={addCampaign}>Crear campaña</button>
      <hr />
      <h3>Campañas activas</h3>
      <ul>
        {campaigns.map((c) => (
          <li key={c.id}>
            <strong>{c.title}</strong>: {c.message} ({c.zone})
          </li>
        ))}
      </ul>
    </div>
  );
}
import { useState } from 'react';

interface Campaign {
  id: number;
  title: string;
  message: string;
  zone: string;
}

export default function Admin() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [newCampaign, setNewCampaign] = useState({
    title: '',
    message: '',
    zone: ''
  });

  const addCampaign = () => {
    if (!newCampaign.title || !newCampaign.message || !newCampaign.zone) return;

    const campaign: Campaign = {
      ...newCampaign,
      id: Date.now()
    };

    setCampaigns([...campaigns, campaign]);
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

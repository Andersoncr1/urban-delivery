import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Plus, Trash2 } from "lucide-react";

export default function PainelEntregadores() {
  const [entregadores, setEntregadores] = useState([
    { id: 1, nome: "Carlos", status: "Disponível", local: "Centro" },
    { id: 2, nome: "Marcos", status: "Em entrega", local: "Bairro Norte" }
  ]);

  const [novoNome, setNovoNome] = useState("");

  function adicionarEntregador() {
    if (!novoNome.trim()) return;
    const novo = {
      id: Date.now(),
      nome: novoNome,
      status: "Disponível",
      local: "—"
    };
    setEntregadores([...entregadores, novo]);
    setNovoNome("");
  }

  function removerEntregador(id) {
    setEntregadores(entregadores.filter((e) => e.id !== id));
  }

  return (
    <div className="p-6 grid gap-6">
      <h1 className="text-3xl font-bold">Painel de Gerenciamento de Entregadores</h1>

      <div className="flex gap-3 items-center">
        <Input
          placeholder="Nome do entregador"
          value={novoNome}
          onChange={(e) => setNovoNome(e.target.value)}
        />
        <Button onClick={adicionarEntregador} className="flex gap-2">
          <Plus size={18} /> Adicionar
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {entregadores.map((ent) => (
          <Card key={ent.id} className="shadow-lg rounded-2xl">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{ent.nome}</h2>
                  <p>Status: {ent.status}</p>
                  <p className="flex gap-1 items-center text-sm text-gray-600">
                    <MapPin size={16} /> {ent.local}
                  </p>
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removerEntregador(ent.id)}
                >
                  <Trash2 size={18} />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

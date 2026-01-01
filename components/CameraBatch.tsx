import LoadingAI from "./LoadingAI";

export default function CameraBatch() {
  return (
    <div className="card">
      <p>Ta ett eller flera foton.</p>
      <button className="secondary">Ladda upp bilder</button>
      <LoadingAI />
    </div>
  );
}

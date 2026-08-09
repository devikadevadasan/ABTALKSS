import { useState, useEffect } from 'react';
import { Github, Linkedin, Check, Link2, ExternalLink, PartyPopper } from 'lucide-react';
import Button from './Button';

type Proof = { github?: string; linkedin?: string };

export default function ProofSubmission({ day }: { day: number }) {
  const key = `abtalks-proof-day-${day}`;
  const [proof, setProof] = useState<Proof>({});
  const [ghInput, setGhInput] = useState('');
  const [liInput, setLiInput] = useState('');
  const [verifying, setVerifying] = useState<'github' | 'linkedin' | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(key);
      if (saved) setProof(JSON.parse(saved));
    } catch {
      /* ignore */
    }
  }, [key]);

  const persist = (next: Proof) => {
    setProof(next);
    try {
      localStorage.setItem(key, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  };

  const verifyGithub = () => {
    if (!ghInput.trim()) return;
    setVerifying('github');
    setTimeout(() => {
      persist({ ...proof, github: ghInput.trim() });
      setGhInput('');
      setVerifying(null);
    }, 700);
  };

  const addLinkedin = () => {
    if (!liInput.trim()) return;
    setVerifying('linkedin');
    setTimeout(() => {
      persist({ ...proof, linkedin: liInput.trim() });
      setLiInput('');
      setVerifying(null);
    }, 700);
  };

  const complete = !!proof.github && !!proof.linkedin;

  return (
    <div className="space-y-4">
      {/* GitHub */}
      <div className="rounded-3xl border border-ink-900/8 bg-white p-5 shadow-soft">
        <div className="flex items-center gap-2">
          <Github className="h-4 w-4 text-ink-900" />
          <h3 className="text-sm font-bold text-ink-900">GitHub proof</h3>
        </div>
        {proof.github ? (
          <div className="mt-3 flex items-center justify-between rounded-2xl bg-success/8 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-success text-white">
                <Check className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[13px] font-semibold text-ink-900">GitHub proof added</div>
                <a
                  href={proof.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[11px] text-electric hover:underline"
                >
                  <Link2 className="h-3 w-3" />
                  {proof.github.length > 38 ? proof.github.slice(0, 38) + '…' : proof.github}
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </div>
            </div>
            <button
              onClick={() => persist({ ...proof, github: undefined })}
              className="tap text-[11px] font-semibold text-ink-500 hover:text-red-500"
            >
              Edit
            </button>
          </div>
        ) : (
          <div className="mt-3 space-y-2.5">
            <input
              type="url"
              inputMode="url"
              placeholder="Paste your GitHub repository or commit URL"
              value={ghInput}
              onChange={(e) => setGhInput(e.target.value)}
              className="w-full rounded-2xl border border-ink-900/10 bg-surface px-4 py-3.5 text-[14px] text-ink-900 placeholder:text-ink-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
            <Button onClick={verifyGithub} variant="dark" fullWidth disabled={verifying === 'github' || !ghInput.trim()}>
              {verifying === 'github' ? 'Verifying…' : 'Verify GitHub'}
            </Button>
          </div>
        )}
      </div>

      {/* LinkedIn */}
      <div className="rounded-3xl border border-ink-900/8 bg-white p-5 shadow-soft">
        <div className="flex items-center gap-2">
          <Linkedin className="h-4 w-4 text-[#0a66c2]" />
          <h3 className="text-sm font-bold text-ink-900">LinkedIn proof</h3>
        </div>
        {proof.linkedin ? (
          <div className="mt-3 flex items-center justify-between rounded-2xl bg-success/8 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-success text-white">
                <Check className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[13px] font-semibold text-ink-900">LinkedIn proof added</div>
                <a
                  href={proof.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[11px] text-electric hover:underline"
                >
                  <Link2 className="h-3 w-3" />
                  {proof.linkedin.length > 38 ? proof.linkedin.slice(0, 38) + '…' : proof.linkedin}
                  <ExternalLink className="h-2.5 w-2.5" />
                </a>
              </div>
            </div>
            <button
              onClick={() => persist({ ...proof, linkedin: undefined })}
              className="tap text-[11px] font-semibold text-ink-500 hover:text-red-500"
            >
              Edit
            </button>
          </div>
        ) : (
          <div className="mt-3 space-y-2.5">
            <input
              type="url"
              inputMode="url"
              placeholder="Paste your LinkedIn post URL"
              value={liInput}
              onChange={(e) => setLiInput(e.target.value)}
              className="w-full rounded-2xl border border-ink-900/10 bg-surface px-4 py-3.5 text-[14px] text-ink-900 placeholder:text-ink-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
            <Button onClick={addLinkedin} variant="dark" fullWidth disabled={verifying === 'linkedin' || !liInput.trim()}>
              {verifying === 'linkedin' ? 'Adding…' : 'Add LinkedIn post'}
            </Button>
          </div>
        )}
      </div>

      {/* Completion */}
      {complete ? (
        <div className="animate-pop rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/10 to-success/10 p-5 text-center shadow-glow">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-ink-950">
            <PartyPopper className="h-6 w-6" />
          </div>
          <div className="mt-3 text-base font-extrabold text-ink-900">Day {day} complete</div>
          <p className="mt-1 text-[13px] text-ink-600">
            Your streak is alive. See you tomorrow night.
          </p>
        </div>
      ) : null}
    </div>
  );
}

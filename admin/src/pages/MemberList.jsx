import { useState, useEffect } from "react";
import axios from "axios";

function MembersList() {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                 const url="https://gym-flow-mern-backend.vercel.app"
                // Adjust url to match your server configuration (e.g., https://gym-flow-mern.vercel.app/)
                const response = await axios.get(`${url}/api/auth/admin/members`); 
                if (response.data.success) {
                    setMembers(response.data.data);
                } else {
                    setError(response.data.message);
                }
            } catch (err) {
                setError("Could not load members dashboard.");
            } finally {
                setLoading(false);
            }
        };
        fetchMembers();
    }, []);

    if (loading) return <p className="text-zinc-500 text-sm p-6">Loading active member roster...</p>;
    if (error) return <p className="text-red-500 text-sm p-6">{error}</p>;

    return (
        <div className="bg-white rounded-xl border border-zinc-200 shadow-xs overflow-hidden max-w-5xl mx-auto mt-6">
            <div className="p-6 border-b border-zinc-200">
                <h2 className="text-lg font-bold text-zinc-900">Active Member Roster</h2>
                <p className="text-xs text-zinc-500 mt-1">Real-time status tracking of all registered athletes and tiers.</p>
            </div>

            {members.length === 0 ? (
                <p className="text-center py-12 text-sm text-zinc-400">No members registered yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-zinc-50 border-b border-zinc-200 text-xs font-semibold text-zinc-600 uppercase tracking-wider">
                                <th className="p-4">Member Info</th>
                                <th className="p-4">Current Tier</th>
                                <th className="p-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 text-sm text-zinc-700">
                            {members.map((member) => {
                                const hasPlan = member.membershipPlan && member.membershipPlan !== "None";
                                return (
                                    <tr key={member._id} className="hover:bg-zinc-50/50 transition">
                                        <td className="p-4">
                                            <div className="font-semibold text-zinc-900">{member.name}</div>
                                            <div className="text-xs text-zinc-500">{member.email}</div>
                                        </td>
                                        <td className="p-4 font-medium">
                                            {hasPlan ? (
                                                <span className="text-indigo-600 font-semibold">{member.membershipPlan}</span>
                                            ) : (
                                                <span className="text-zinc-400">No Active Plan</span>
                                            )}
                                        </td>
                                        <td className="p-4">
                                            {hasPlan ? (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                                                    ● Active
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200">
                                                    ● Idle
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default MembersList;
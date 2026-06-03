"use client";

import { useEffect, useState } from "react";

export default function RequestsPage() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchRequests = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/registrations`
            );

            const result = await res.json();

            setData(result);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchRequests();
    }, []);

    const handleDelete = async (id: number) => {
        if (!confirm("Бүртгэлийг устгах уу?"))
            return;

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/registrations/${id}`,
                {
                    method: "DELETE",
                }
            );

            if (!res.ok) {
                throw new Error("Delete failed");
            }

            fetchRequests();
        } catch (error) {
            console.error(error);

            alert("Устгаж чадсангүй");
        }
    };

    const requestCertificate = async (
        id: number
    ) => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/registrations/${id}/request-certificate`,
            {
                method: "POST",
            }
        );

        if (!res.ok) {
            alert("Алдаа гарлаа");
            return;
        }

        alert("Certificate хүсэлт илгээгдлээ");

        fetchRequests();
    };

    useEffect(() => {
        fetchRequests();
    }, []);

    if (loading) {
        return (
            <div className="p-8">
                Уншиж байна...
            </div>
        );
    }

    return (
        <div className="p-8">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                    Сургалтын хүсэлтүүд
                </h1>

                <div>
                    Нийт: {data.length}
                </div>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl shadow">
                <table className="w-full text-center">
                    <thead className="bg-slate-100 ">
                        <tr>
                            <th className="p-3">#</th>
                            <th className="p-3">Овог</th>
                            <th className="p-3">Нэр</th>
                            <th className="p-3">Регистр</th>
                            <th className="p-3">Утас</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Түвшин</th>
                            <th className="p-3">Огноо</th>
                            <th className="p-3">Төлөв</th>
                            <th className="p-3">Үйлдэл</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={item.id}
                                className="border-t"
                            >
                                <td className="p-3">
                                    {index + 1}
                                </td>

                                <td className="p-3">
                                    {item.lastname}
                                </td>

                                <td className="p-3">
                                    {item.firstname}
                                </td>

                                <td className="p-3">
                                    {item.regId}
                                </td>

                                <td className="p-3">
                                    {item.phone}
                                </td>

                                <td className="p-3">
                                    {item.email}
                                </td>

                                <td className="p-3">
                                    {item.level}
                                </td>   <td className="p-3">
                                    {item.status}
                                </td>

                                <td className="p-3">
                                    {new Date(
                                        item.createdAt
                                    ).toLocaleDateString()}
                                </td>

                                <td className="p-3">
                                    <div className="flex gap-2 justify-center">
                                        <button
                                            onClick={() =>
                                                requestCertificate(
                                                    item.id
                                                )
                                            }
                                            className="
                        px-3 py-2
                        rounded-lg
                        bg-green-600
                        text-white
                        text-sm
                      "
                                        >
                                            Request Certificate
                                        </button>
                                        <button
                                            className="
                        px-3 py-2
                        rounded-lg
                        bg-blue-600
                        text-white
                        text-sm
                      "
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() =>
                                                handleDelete(
                                                    item.id
                                                )
                                            }
                                            className="
                        px-3 py-2
                        rounded-lg
                        bg-red-600
                        text-white
                        text-sm
                      "
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
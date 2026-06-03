"use client";

import { useState } from "react";

export default function RegistrationPage() {
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    regId: "",
    phone: "",
    email: "",
    level: "B",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const cyrillicRegex =
      /^[А-ЯЁӨҮа-яёөү\s]+$/;

    const regIdRegex =
      /^[А-ЯЁӨҮа-яёөү]{2}[0-9]{8}$/;

    const phoneRegex =
      /^[0-9]{8}$/;

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.lastname.trim()) {
      alert("Овог оруулна уу");
      return;
    }

    if (!cyrillicRegex.test(form.lastname)) {
      alert(
        "Овог зөвхөн кирилл үсгээр байна"
      );
      return;
    }

    if (!form.firstname.trim()) {
      alert("Нэр оруулна уу");
      return;
    }

    if (
      !cyrillicRegex.test(form.firstname)
    ) {
      alert(
        "Нэр зөвхөн кирилл үсгээр байна"
      );
      return;
    }

    if (
      !regIdRegex.test(
        form.regId.toUpperCase()
      )
    ) {
      alert(
        "Регистр АГ12121212 бүтэцтэй байх ёстой"
      );
      return;
    }

    if (!phoneRegex.test(form.phone)) {
      alert(
        "Утасны дугаар 8 оронтой байх ёстой"
      );
      return;
    }

    if (
      form.email &&
      !emailRegex.test(form.email)
    ) {
      alert(
        "И-мэйл хаягийн формат буруу байна"
      );
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/registrations`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ...form,
            regId:
              form.regId.toUpperCase(),
          }),
        }
      );

      if (!res.ok) {
        throw new Error(
          "Failed to submit"
        );
      }

      alert(
        "Бүртгэл амжилттай илгээгдлээ"
      );

      setForm({
        lastname: "",
        firstname: "",
        regId: "",
        phone: "",
        email: "",
        level: "B",
        description: "",
      });
    } catch (error) {
      console.error(error);

      alert(
        "Бүртгэл илгээх үед алдаа гарлаа"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-2">
            Сургалтын бүртгэл
          </h1>

          <p className="text-center text-slate-500 mb-8">
            Дрон нисгэгчийн сургалтад
            бүртгүүлэх хүсэлт
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                placeholder="Овог"
                className="h-12 px-4 border rounded-xl"
                value={form.lastname}
                onChange={(e) =>
                  setForm({
                    ...form,
                    lastname:
                      e.target.value,
                  })
                }
              />

              <input
                placeholder="Нэр"
                className="h-12 px-4 border rounded-xl"
                value={form.firstname}
                onChange={(e) =>
                  setForm({
                    ...form,
                    firstname:
                      e.target.value,
                  })
                }
              />
            </div>

            <input
              placeholder="АГ12121212"
              maxLength={10}
              className="w-full h-12 px-4 border rounded-xl"
              value={form.regId}
              onChange={(e) =>
                setForm({
                  ...form,
                  regId:
                    e.target.value.toUpperCase(),
                })
              }
            />

            <input
              placeholder="99112233"
              maxLength={8}
              inputMode="numeric"
              className="w-full h-12 px-4 border rounded-xl"
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone:
                    e.target.value.replace(
                      /\D/g,
                      ""
                    ),
                })
              }
            />

            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full h-12 px-4 border rounded-xl"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email:
                    e.target.value,
                })
              }
            />

            <select
              className="w-full h-12 px-4 border rounded-xl"
              value={form.level}
              onChange={(e) =>
                setForm({
                  ...form,
                  level:
                    e.target.value,
                })
              }
            >
              <option value="B">
                Анхан шат
              </option>
              <option value="I">
                Дунд шат
              </option>
              <option value="A">
                Ахисан шат
              </option>
            </select>

            <textarea
              rows={4}
              placeholder="Нэмэлт мэдээлэл"
              className="w-full p-4 border rounded-xl"
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description:
                    e.target.value,
                })
              }
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                h-12
                bg-blue-600
                text-white
                rounded-xl
                hover:bg-blue-700
                transition
                disabled:opacity-50
              "
            >
              {loading
                ? "Илгээж байна..."
                : "Бүртгүүлэх"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
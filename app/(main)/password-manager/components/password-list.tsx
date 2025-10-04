"use client";

import { useEffect, useState } from "react";
import PasswordCard from "./password-card";
import { apiCredentials } from "@/app/utils/api-credentials";

type Credential = {
  id: string;
  url: string;
  originUrl: string;
  login: string;
  password: string;
  iv: string;
  tag: string;
  notes: string;
  category: string;
  createdAt: string;
  updatedAt: string;
};

export default function PasswordList() {
  const [items, setItems] = useState<Credential[]>([]);

  useEffect(() => {
    const callback = async () => {
      try {
        const getCredentialsResponse = await apiCredentials.getCredentials("*", undefined, undefined)
        const passwordItems: Credential[] = Array.isArray(getCredentialsResponse.data) 
          ? getCredentialsResponse.data 
          : [];
        setItems(passwordItems);
      } catch (error) {
        console.error("Erreur lors de la récupération des credentials:", error);
        setItems([]);
      }
    };
    callback();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item) => (
        <PasswordCard
          key={item.id}
          id={item.id}
          url={item.url}
          originUrl={item.originUrl}
          login={item.login}
          password={item.password}
          iv={item.iv}
          tag={item.tag}
          notes={item.notes}
          category={item.category}
          createdAt={item.createdAt}
          updatedAt={item.updatedAt}
        />
      ))}
    </div>
  );
}

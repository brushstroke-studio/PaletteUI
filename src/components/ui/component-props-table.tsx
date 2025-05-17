"use client";

import React from "react";

interface Prop {
  name: string;
  type: string;
  description: string;
  options?: string[];
  default?: string | boolean | number;
}

interface ComponentPropsTableProps {
  props: Prop[];
}

export function ComponentPropsTable({ props }: ComponentPropsTableProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold">Properties</h3>
      <div className="rounded-md border overflow-hidden">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                Type
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-background">
            {props.map((prop) => (
              <tr key={prop.name}>
                <td className="px-4 py-3 text-sm font-mono">{prop.name}</td>
                <td className="px-4 py-3 text-sm font-mono">{prop.type}</td>
                <td className="px-4 py-3 text-sm">
                  <div>{prop.description}</div>
                  {prop.options && (
                    <div className="mt-1 text-xs">
                      Options: {prop.options.join(", ")}
                    </div>
                  )}
                  {prop.default !== undefined && (
                    <div className="mt-1 text-xs">
                      Default: {String(prop.default)}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

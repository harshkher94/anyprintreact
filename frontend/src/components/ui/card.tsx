import React from 'react';

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} className={`border p-4 rounded shadow ${props.className}`} />
);

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} className={`mb-4 ${props.className}`} />
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (props) => (
  <h2 {...props} className={`text-2xl font-bold ${props.className}`} />
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = (props) => (
  <p {...props} className={`text-gray-600 ${props.className}`} />
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => (
  <div {...props} />
);
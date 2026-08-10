export const generateContactMailto = (formData: any) => {
  const subject = encodeURIComponent(`Project Inquiry — ${formData.projectType}`);
  const body = encodeURIComponent(
    `Hello Muhammad,\n\nI am contacting you regarding a potential project.\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget || 'N/A'}\nDeadline: ${formData.deadline || 'N/A'}\n\nProject Details:\n${formData.message}\n\nRegards,\n${formData.name}`
  );
  return `mailto:hamza207205@gmail.com?subject=${subject}&body=${body}`;
};

export const generateGmailCompose = (formData: any) => {
  const subject = encodeURIComponent(`Project Inquiry — ${formData.projectType}`);
  const body = encodeURIComponent(
    `Hello Muhammad,\n\nI am contacting you regarding a potential project.\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget || 'N/A'}\nDeadline: ${formData.deadline || 'N/A'}\n\nProject Details:\n${formData.message}\n\nRegards,\n${formData.name}`
  );
  return `https://mail.google.com/mail/?view=cm&fs=1&to=hamza207205@gmail.com&su=${subject}&body=${body}`;
};

export const generateWhatsAppMessage = (formData: any) => {
  const message = encodeURIComponent(
    `Hello Muhammad,\n\nMy name is ${formData.name}.\n\nI would like to discuss a ${formData.projectType} project with you.\n\nProject details:\n${formData.message}\n\nThank you.`
  );
  return `https://wa.me/923298753659?text=${message}`;
};

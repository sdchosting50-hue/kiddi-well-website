'use client';

export function ProductInquiryButton({ productName }: { productName: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const to = 'city@kiddiwell.com';
    const subject = `Order Inquiry: ${productName}`;
    const body = `I would like to order ${productName}. Please provide more information.`;
    const gmailUrl =
      'https://mail.google.com/mail/?view=cm&fs=1' +
      '&to=' + encodeURIComponent(to) +
      '&su=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);
    window.open(gmailUrl, '_blank');
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-center"
    >
      Place Order Inquiry
    </a>
  );
}

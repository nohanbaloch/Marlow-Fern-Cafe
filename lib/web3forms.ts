export interface Web3FormsResponse {
  success: boolean;
  message: string;
}

export async function submitWeb3Forms(
  payload: Record<string, unknown>
): Promise<Web3FormsResponse> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey || accessKey.trim() === "" || accessKey === "your_web3forms_access_key_here") {
    throw new Error(
      "Web3Forms access key is not configured. Please add your key to NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local."
    );
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      ...payload,
    }),
  });

  const data = await response.json();

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Something went wrong while submitting the form.");
  }

  return data;
}

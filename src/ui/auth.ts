import type { ReactNode } from "react";

/** Values submitted by the email signup form. */
export type TEmailSignupValues = {
  email: string;
  password: string;
  confirm_password: string;
};

/** Props for the email signup form component. */
export type TEmailSignupProps = {
  onSubmit: (values: TEmailSignupValues) => void | Promise<void>;
  onGoogleLogin?: () => void | Promise<void>;
  isLoading?: boolean;
  error?: ReactNode;
  successMessage?: ReactNode;
  redirect?: string;
  captchaSlot?: ReactNode;
  showGoogleLogin?: boolean;
};

/** Props for the phone OTP signup form component. */
export type TPhoneSignupProps = {
  onSendOtp: (phone: string) => void | Promise<void>;
  onSubmitOtp: (otp: string) => void | Promise<void>;
  isOtpSent?: boolean;
  isLoading?: boolean;
  error?: ReactNode;
  redirect?: string;
};

/** Values submitted by the login form. */
export type TLoginFormValues = {
  email: string;
  password: string;
};

/** Props for the login form component. */
export type TLoginFormProps = {
  onSubmit: (values: TLoginFormValues) => void | Promise<void>;
  onGoogleLogin?: () => void | Promise<void>;
  isLoading?: boolean;
  error?: ReactNode;
  successMessage?: ReactNode;
  redirect?: string;
  showGoogleLogin?: boolean;
};

/** Values submitted by the forgot-password form. */
export type TForgotPasswordFormValues = {
  email: string;
};

/** Props for the forgot-password form component. */
export type TForgotPasswordFormProps = {
  onSubmit: (values: TForgotPasswordFormValues) => void | Promise<void>;
  isLoading?: boolean;
  error?: ReactNode;
  successMessage?: ReactNode;
  redirect?: string;
  logoUrl?: string;
};

/** Props for the logout side-effect component. */
export type TLogoutProps = {
  onLogout: () => void | Promise<void>;
};

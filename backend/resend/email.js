import {
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplate.js";
import { resendClient } from "./resend.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipent = [email];
  try {
    const response = await resendClient(
      recipent,
      "Verify you email",
      VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      )
    );
    console.log("Email Sent successfully", response);
  } catch (error) {
    console.log("Error sending verification email: " + error);
    throw new Error("Error sending verification email: ", { error });
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipent = [email];
  try {
    const response = await resendClient(
      recipent,
      "Welcome to Nexus",
      WELCOME_EMAIL_TEMPLATE.replace("{name}", name)
    );
    console.log("Welcome Email Sent successfully", response);
  } catch (error) {
    console.log("Error sending welcome email: " + error);
    throw new Error("Error sending welcome email: ", { error });
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipent = [email];
  try {
    const response = await resendClient(
      recipent,
      "Reset your password",
      PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL)
    );
    console.log("Password Reset Email Sent successfully", response);
  } catch (error) {
    console.log("Error sending password reset email: " + error);
    throw new Error("Error sending password reset email: ", { error });
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipent = [email];
  try {
    const response = await resendClient(
      recipent,
      "Password reset successful",
      PASSWORD_RESET_SUCCESS_TEMPLATE
    );
    console.log("Password Reset Success Email Sent successfully", response);
  } catch (error) {
    console.log("Error sending password reset success email: " + error);
    throw new Error("Error sending password reset success email: ", { error });
  }
};

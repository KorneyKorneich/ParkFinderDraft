import { FirebaseError } from "firebase/app";

export const getFirebaseAuthErrorMessage = (error: FirebaseError) => {
    switch (error?.code) {
        case "auth/invalid-email":
            return "Invalid email address. Please enter a valid email.";

        case "auth/user-not-found":
            return "User not found. Please check the email address.";

        case "auth/wrong-password":
            return "Incorrect password. Please try again.";

        case "auth/email-already-in-use":
            return "Email already in use. Please try another email.";

        case "auth/invalid-verification-id":
            return "Invalid verification ID. Please try again.";

        case "auth/user-disabled":
            return "User disabled. Please contact support.";

        case "auth/invalid-credential":
            return "Invalid credential. Please try again.";

        case "auth/credential-already-in-use":
            return "Credential already in use. Please try again.";

        case "auth/timeout":
            return "Timeout. Please try again.";

        case "auth/email-already-exists":
            return "Email already exists. Please try again.";

        default:
            return "Oops! Something went wrong. Please try again later.";
    }
};

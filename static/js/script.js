document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("form");

    if (!registerForm) {
        return;
    }

    function showMessage(message) {
        alert(message);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateForm(data) {
        const errors = [];

        if (!data.username || typeof data.username !== "string") {
            errors.push("Username is required.");
        }

        if (!data.email || typeof data.email !== "string" || !isValidEmail(data.email)) {
            errors.push("Please enter a valid email address.");
        }

        if (!data.first_name || typeof data.first_name !== "string") {
            errors.push("First name is required.");
        }

        if (!data.last_name || typeof data.last_name !== "string") {
            errors.push("Last name is required.");
        }

        if (!data.password || typeof data.password !== "string") {
            errors.push("Password is required.");
        } else if (data.password.length < 8) {
            errors.push("Password must be at least 8 characters long.");
        }

        if (!data.confirm_password || typeof data.confirm_password !== "string") {
            errors.push("Confirm password is required.");
        }

        if (data.password && data.confirm_password && data.password !== data.confirm_password) {
            errors.push("Passwords do not match.");
        }

        return errors;
    }

    async function parseResponse(response) {
        const rawText = await response.text();

        if (!rawText) {
            return {};
        }

        try {
            return JSON.parse(rawText);
        } catch {
            return { detail: rawText };
        }
    }

    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(registerForm);

        const data = {
            username: (formData.get("username") || "").toString().trim(),
            email: (formData.get("email") || "").toString().trim(),
            first_name: (formData.get("first_name") || "").toString().trim(),
            last_name: (formData.get("last_name") || "").toString().trim(),
            password: (formData.get("password") || "").toString(),
            confirm_password: (formData.get("confirm_password") || "").toString()
        };

        const validationErrors = validateForm(data);

        if (validationErrors.length > 0) {
            showMessage(validationErrors.join("\n"));
            return;
        }

        try {
            const response = await fetch("/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await parseResponse(response);

            if (response.ok) {
                showMessage("Registration successful!");
                window.location.href = "/login";
                return;
            }

            if (result.detail) {
                if (Array.isArray(result.detail)) {
                    const messages = result.detail
                        .map((err) => err.msg || JSON.stringify(err))
                        .join("\n");
                    showMessage(messages);
                } else if (typeof result.detail === "string") {
                    showMessage(result.detail);
                } else {
                    showMessage("Registration failed.");
                }
            } else {
                showMessage("Registration failed.");
            }
        } catch (error) {
            console.error("Registration error:", error);
            showMessage("Something went wrong.");
        }
    });
});
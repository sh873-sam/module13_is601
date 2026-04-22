document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.querySelector("form");

    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const formData = new FormData(registerForm);

            const data = {
                username: formData.get("username"),
                email: formData.get("email"),
                first_name: formData.get("first_name"),
                last_name: formData.get("last_name"),
                password: formData.get("password"),
                confirm_password: formData.get("confirm_password"),
            };

            try {
                const response = await fetch("/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok) {
                    alert("Registration successful!");
                    window.location.href = "/login";
                } else {
                    // 🔥 THIS IS THE FIX
                    if (result.detail) {
                        if (Array.isArray(result.detail)) {
                            const messages = result.detail.map(err => err.msg).join("\n");
                            alert(messages);
                        } else {
                            alert(result.detail);
                        }
                    } else {
                        alert("Registration failed.");
                    }
                }

            } catch (error) {
                console.error(error);
                alert("Something went wrong.");
            }
        });
    }
});
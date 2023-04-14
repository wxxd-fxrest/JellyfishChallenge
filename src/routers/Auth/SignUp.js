const SignUp = () => {
    return (
        <div>
            <p> 회원가입 </p>
            <form>
                <input type="email"
                        name="email"
                        placeholder="이메일"
                        required />
                <input type="password"
                        name="password"
                        placeholder="비밀번호"
                        required />
                <button> 회원가입 </button>
            </form>
        </div>
    )
}

export default SignUp ; 
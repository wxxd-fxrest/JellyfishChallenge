const LogIn = () => {
    return (
        <div>
            <p> 로그인 </p>
            <form>
                <input type="email"
                        name="email"
                        placeholder="이메일"
                        required />
                <input type="password"
                        name="password"
                        placeholder="비밀번호"
                        required  />
                <button> 로그인 </button>
            </form>
        </div>
    )
}

export default LogIn ; 
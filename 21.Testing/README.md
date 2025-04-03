# Testing trong ReactJS :

    - Là quá trình kiểm tra tính đúng đắn và chức năng của các thành phần trong ứng dụng React.

    - Giúp phát hiện sớm các lỗi.
    - Giảm thiểu chi phí và thời gian phát triển.
    - Đảm bảo rằng các thay đổi không gây ra vấn đề mới.

# Các kỹ thuật Testing phổ biến :

    - Unit Testing.
    - Integration Testing.
    - Snapshot Testing.
    - End-to-End Testing.

# Các components quan trọng trong Testing :

## Hàm describe() và it() :

    - Là 2 hàm quan trọng trong Jest.
    - Được sử dụng để định nghĩa các bài kiểm thử.
    - Tạo ra các test suites.

    - Cách dùng :

        describe("Example test suite", () => {
            it("should do something", () => {
                // Các test case ở đây
            });
        });

    - Cả 2 hàm : nhận vào 2 tham số.
        + Thứ nhất : Một chuỗi mô tả về "test suite".
        + Thứ hai : Một hàm "callback" chứa các bài kiểm thử.

# Hàm it() và test() :

    - Cả 2 dùng để định nghĩa một "test case" cụ thể.
    - Cả "it" và "test" đều có thể sử dụng thay thế cho nhau.
    - "test" thường được ưa chuộng hơn.

    - Cách dùng hàm it() :

        it("should render correctly", () => {
             // Các test case ở đây
        });

    - Cách dùng hàm test() :

        test("should render correctly,() => {
             // Các test case ở đây
        });

## Hàm expect() :

    - Sử dụng để kiểm tra các giá trị.
    - Xác định liệu chúng có đúng như mong đợi hay không.

    - Nhận vào 1 giá trị cần kiểm tra > Trả về 1 đối tượng > Có các phương thức kiểm tra khác nhau.

    - Các phương thức bao gồm :

> toBe(value) : Kiểm tra xem giá trị có bằng "value" hay không.

    ----- Number, String, Boolean, Null, Undefined

> toEqual(value) : Kiểm tra xem giá trị có bằng "value" hay không.

    ----- Object, Array

> not.toBe(value) : Kiểm tra xem giá trị có khác với "value" hay không.

> toBeTruthy() / toBeFalsy() : Kiểm tra xem giá trị có đúng là "true" hoặc "false" hay không.

> toContain() : Kiểm tra sự tồn tại của giá trị trong mảng hoặc chuỗi.

> toHaveLength() : Kiểm tra dộ dài của mảng, chuỗi.

> toBeInTheDocument() : Dùng với "React Testing Library" để kiểm tra một element có được render trong DOM hay không.

    - Cách dùng :

        test("adds 1 + 2 to equal 3", () => {
            expect(1 + 2).toBe(3);
        });

## So sánh toBe() với toEqual() :

    * toBe() : so sánh địa chỉ vùng nhớ của các giá trị. Chỉ hoạt động cho các giá trị nguyên thủy.

    * toEqual() : so sánh giá trị thực sự của các giá trị.
    Chỉ hoạt động cho cả giá trị nguyên thủy và phức tạp.

    - Cách dùng :

        test("object assignment", () => {
            const data = { one: 1 };
            data["two"] = 2;
            expect(data).toEqual({ one: 1, two: 2 });
        });

## Hàm render() :

    - Giúp render một component React và DOM ảo (virtual DOM).
    - Trả về một đối tượng "wrapper" > chứa các phương thức để tìm kiếm và tương tác với các phần tử trong component.

    - Tham số của render() : Nhận vào một tham số.
        * component : component React cần render.
        * options : tùy chọn cấu hình, bao gồm các thuộc tính như :
            + wrapper
            + baseElement
            + queries
            + container
            + hydrate
            + wrapperOptions
            + renderOptions

    - Tìm kiếm các phần tử trong component :
            + getByRole()
            + getByText()
            + getByTestId()
            ....
        => Trả về phần tử đầu tiên tìm được trong component.
        => Nếu không tìm thấy => ném ra một ngoại lệ (exception).

# screen :

    - Là một đối tượng được tạo ra để cung cấp các phương thức để truy cập và tương tác với các phần tử trong DOM.

    - Sử dụng phương thức "getByRole()" của screen để tìm kiếm phần tử DOM có nội dung bên trong.

    - Nếu phần tử này tồn tại trong DOM > Jest không ném ra ngoại lệ > test pass.

    - Nếu không tồn tại > Jest ném ra một ngoại lệ > test fail.

    - fireEvent : được sử dụng để kích hoạt các sự kiện trên các phần tử DOM.

# Hàm act() :

    - Là 1 phương thức quan trọng để đảm bảo rằng các thao tác giao diện (user interactions) và cập nhật "state" của component được thực hiện đồng bộ và đúng cách.

==========================================================

# beforeEach() và afterEach() :

    - beforeEach() : Dùng để thực hiện các thao tác chuẩn bị trước mỗi test.
    - afterEach() : Dùng để dọn dẹp sau mỗi test.

    - Cú pháp :

        beforeEach(() => {
            // Mã chuẩn bị trước mỗi test case
        });

        afterEach(() => {
            // Mã dọn dẹp sau mỗi test case
        });

# beforeAll() và afterAll() :

    - beforeAll() : Dùng để thực hiện 1 lần duy nhất trước khi chạy tất cả các test.
    - afterAll() : Sau khi tất cả test đã hoàn thành. (chạy 1 lần).

    - Cú pháp :

        beforeAll(() => {
            // Mã chuẩn bị trước khi bắt đầu tất cả test case
        });

        afterAll(() => {
            // Mã dọn dẹp sau khi hoàn thành tất cả test case
        });

# mock() và spy() :

    - Jest cung cấp các hàm "mock" và "spy" để giả lập các hàm, phương thức hoặc module bên ngoài.

    - Cú pháp :

        // Giả lập gọi hàm :
        const mockFunction = jest.fn();
        mockFunction();

        // Kiểm tra xem hàm có được gọi chưa :
        expect(mockFunction).toHaveBeenCalled();

        // Mock module :
        jest.mock("module-name");

# toHaveBeenCalled() và toHaveBeenCalledTimes();

    - Dùng để kiểm tra xem một hàm "mock" có được gọi bao nhiêu lần trong test.

    - Cú pháp :

        // Kiểm tra xem hàm có được gọi chưa :
        expect(mockFunction).toHaveBeenCalled();

        // Kiểm tra hàm đã được gọi đúng số lần :
        expect(mockFunction).toHaveBeenCalledTimes(1);

# toThrow() :

    - Kiểm tra xem một hàm có ném ra lỗi hay không.

    - Cách dùng :

        expect(() => {
            throw new Error("An error!");
        }).toThrow("An error!");

# toMatchSnapshot() :

    - Dùng để tạo và so sánh snapshot của 1 component hoặc đầu ra của hàm.
    - Giúp kiểm tra sự thay đổi của UI qua các lần chạy test.

    - Cách dùng :

        it('should match the snapshot', () => {
            const tree = renderer.create(<MyComponent />).toJSON();
            expect(tree).toMatchSnapshot();
        });

# async/await() và done() :

    - Dùng để kiểm tra các hàm bất đồng bộ (asynchronous functions).

    - async/await : sử dụng trong test case.
    - done : để đảm bảo trong Jest hoàn tất kiểm tra trước khi kết thúc.

    - Cách dùng async/await :

        it('should fetch data', async () => {
            const data = await fetchData();
            expect(data).toBeDefined();
        });

    - Cách dùng done :

        it('should fetch data', done => {
            fetchData().then(data => {
                expect(data).toBeDefined();
                done();
            });
        });

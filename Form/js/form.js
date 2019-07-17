<script>
    const xhr = new XMLHttpRequest();

    const query = `webform_id=301&amp;
                   phone=${event.target.phone.value}&amp;
                   name=${event.target.fio.value}&amp;
                   email=${event.target.email.value}&amp;
                   napravlenie=Пробное занятие`;

    xhr.open('POST', 'https://old.citrus.ua/api/webform_send.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');


    xhr.send(query);
    </script>
